const { todos } = require("./sampleData");

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } =  require('graphql');

const TodoType = new GraphQLObjectType({
    name: 'Todo',
    fields: {
        id: {type: GraphQLID },
        title: { type: GraphQLString},
        completed: { type: GraphQLBoolean },
    }
});



// const RootQueryType = new GraphQLObjectType({
//     name: 'query',
//     fields: {
//         todos: {
//             type: new GraphQLList(TodoType)
//         }
//     }
// })