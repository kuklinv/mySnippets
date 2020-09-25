// nested objects!

const data = {
  user: "ubuntu",
  hosts: {
    0: {
      name: "web1",
    },
    1: {
      name: "web2",
      null: 3,
      active: false,
    },
  },
};

const get = (data: object, keys: any): any => {
  let current = data;
  for (const key of keys) {
    if (!current.hasOwnProperty(key)) {
      // !!!! this cool - go inside multi-nested!!
      return null;
    }
    current = current[key];
  }

  return current;
};

// export default getIn;
console.log(get(data, ["undefined"]));
console.log(get(data, ["user"]));
console.log(get(data, ["user", "ubuntu"]));
console.log(get(data, ["hosts", 1, "name"]));
console.log(get(data, ["hosts", 0]));
console.log(get(data, ["hosts", 1, null]));
console.log(get(data, ["hosts", 1, "active"]));
