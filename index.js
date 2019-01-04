exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };

    var noArray = [1,2,[3,4],5];

      var result = [];
      var stack = noArray, first;

      while (stack.length > 0) {
        // Get the first item from the stack created above
        first = stack[0];

        // Check if the element in question is an array
        if (Array.isArray(first)) {

          // Replace the nested array with its items
          Array.prototype.splice.apply(stack, [0, 1].concat(first));
        } else {

          // Push the first item
          result.push(first);

          // Delete the first item
          stack.splice(0, 1);
        }
      }

    console.log(result);

    return response;
};
