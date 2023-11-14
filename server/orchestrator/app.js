const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const axios = require("axios");
const redis = require("./config/redisConfig");

const APP_SERVICE_URL = "http://localhost:4002";
const USER_SERVICE_URL = "http://localhost:4001/users";

const typeDefs = `#graphql

    type User {
        _id: ID
        username: String
        email: String
        password: String
        role: String
        phoneNumber: String
        address: String
    }

    type UserById {
        _id: ID
        username: String
        email: String
        password: String
        role: String
        phoneNumber: String
        address: String
    }

    type Item {
        id: ID
        name: String
        description: String
        price: Int
        imgUrl: String
        authorId: String
        categoryId: Int
        createdAt: String
        updatedAt: String
    }

    type IngredientItem {
        id: ID
        itemId: Int
        name: String
        createdAt: String
        updatedAt: String
    }

    type Category {
      id: ID
      name: String
    }

    type DetailItem {
        id: ID
        name: String
        description: String
        price: Int
        imgUrl: String
        authorId: String
        categoryId: Int
        createdAt: String
        updatedAt: String
        Ingredients: [IngredientItem]
        User: User
        Category: Category
    }

    type Query {
        users: [User]
        items: [Item]
        detailItem(id:ID!): DetailItem
        userById(_id: String): UserById
        Categories:Category
    }

    type SuccessMessage {
        message: String
    }

    input Ingredient {
        name: String
    }

    type Mutation {
        createUser(
            username: String
            email: String
            password: String
            role: String
            phoneNumber: String
            address: String
        ) : SuccessMessage        
        deleteUser(_id: String): SuccessMessage
        deleteItem(id: String): SuccessMessage
        createItem(
            name: String
            description: String
            price: Int
            imgUrl: String
            authorId: String
            categoryId: Int
            ingredients: [Ingredient]
        ): SuccessMessage
        updateItem(
            id: Int
            name: String
            description: String
            price: Int
            imgUrl: String
            authorId: String
            categoryId: Int
        ): SuccessMessage
    }
`;

const resolvers = {
  Query: {
    users: async () => {
      try {
        const cache = await redis.get("users");
        if (cache) {
          console.log("Cache is true");
          const data = JSON.parse(cache);
          return data;
        } else {
          console.log("Cache is false");
          const { data } = await axios.get(USER_SERVICE_URL);
          const values = JSON.stringify(data);
          await redis.set("users", values);
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    items: async () => {
      try {
        const cache = await redis.get("items");
        if (cache) {
          console.log("Cache is true");
          const data = JSON.parse(cache);
          return data;
        } else {
          console.log("Cache is false");
          const { data } = await axios.get(APP_SERVICE_URL + "/items");
          const values = JSON.stringify(data);
          await redis.set("items", values);
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    detailItem: async (_, args) => {
      try {
        const id = args.id;
        const { data } = await axios.get(APP_SERVICE_URL + "/items/" + id);
        const author = await axios.get(USER_SERVICE_URL + "/" + data.authorId);
        data.User = author.data;
        const values = JSON.stringify(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    userById: async (_, args) => {
      try {
        const cache = await redis.get("userById");
        if (cache) {
          console.log("Cache is true");
          const data = JSON.parse(cache);
          return data;
        } else {
          const id = args._id;
          const { data } = await axios.get(USER_SERVICE_URL + "/" + id);
          const values = JSON.stringify(data);
          await redis.set("userById", values);
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      try {
        const { username, email, password, role, phoneNumber, address } = args;
        await axios.post(USER_SERVICE_URL, {
          username,
          email,
          password,
          role,
          phoneNumber,
          address,
        });
        await redis.del("users");
        return { message: "Success Add New User" };
      } catch (error) {
        console.log(error);
      }
    },
    deleteUser: async (_, args) => {
      try {
        const id = args._id;
        const { data } = await axios.delete(USER_SERVICE_URL + "/" + id);
        if (data.deletedCount === 1) {
          await redis.del("users");
          await redis.del("userById");
          return { message: "Success Delete User" };
        } else {
          throw { message: "Failed Delete User" };
        }
      } catch (error) {
        console.log(error);
      }
    },
    deleteItem: async (_, args) => {
      try {
        const id = +args.id;
        const { data } = await axios.delete(APP_SERVICE_URL + "/items", {
          data: { id },
        });
        if (data.id) {
          await redis.del("items");
          await redis.del("itemDetail");
          return { message: `Success delete item ${data.name}` };
        } else {
          throw { message: "Failed Delete Item" };
        }
      } catch (error) {
        console.log(error);
      }
    },
    createItem: async (_, args) => {
      try {
        const {
          name,
          description,
          price,
          imgUrl,
          authorId,
          categoryId,
          ingredients,
        } = args;
        const { data } = await axios.post(APP_SERVICE_URL + "/items", {
          data: {
            name,
            description,
            price,
            imgUrl,
            authorId,
            categoryId,
            ingredients,
          },
        });
        await redis.del("items");
        return { message: `Create success item ${data.item.name}` };
      } catch (error) {
        console.log(error);
      }
    },
    updateItem: async (_, args) => {
      try {
        const { id, name, description, price, imgUrl, authorId, categoryId } =
          args;
        await axios.put(APP_SERVICE_URL + "/items/" + id, {
          id,
          name,
          description,
          price,
          imgUrl,
          authorId,
          categoryId,
        });
        await redis.del("items");
        return { message: "Success Update Item" };
      } catch (error) {
        console.log(error);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: process.env.PORT || 4000 },
})
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  })
  .catch((err) => {
    console.log(err);
  });
