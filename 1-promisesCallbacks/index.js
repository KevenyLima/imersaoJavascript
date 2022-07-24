// resolvendo problema de assincronismo
const getUser = (callback) => {
  setTimeout(() => {
    return callback(null, {
      name: "batman",
      id: "age812hes",
    });
  }, 1000);
};

const getAddress = (userId, callback) => {
  setTimeout(() => {
    return callback(null, {
      address: "rua dos bobos",
      number: "0",
      id: userId,
    });
  }, 1000);
};
const getPhone = (userId, callback) => {
  setTimeout(() => {
    return callback(null, {
      phone: "2412551",
      add: "85",
      id: userId,
    });
  }, 1000);
};
// ---------------------------------------------------------------------------------------------------------
getUser((error, user) => {
  if (error) {
    console.log("deu ruim", error);
    return;
  }

  getAddress(user.id, (error, address) => {
    console.log("address", address);
  });
  console.log(user);

  return;
});
//------------------------------------------------------------------------------------------------------
// criando um função com promise
const getUserPromise = (error) => {
  return new Promise((resolve, reject) => {
    if (error) {
      reject(new Error(`um erro foi passado, ${error}`));
    }
    setTimeout(() => {
      return resolve({
        name: "robin",
        id: "sd23ed32ed",
      });
    }, 1000);
  });
};
getUserPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
getUserPromise("deu ruim")
  .then()
  .catch((error) => console.log(error));

// transformando callbacks in promises
const util = require("util");

const getUserAsync = util.promisify(getUser);
const getAddressAsync = util.promisify(getAddress);
const getPhoneAsync = util.promisify(getPhone);

getUserAsync().then((Response) => console.log("getUserAsync", Response));

// async await
const main = async () => {
  try {
    // e executado primeiro pois as outras promises dependem que esta seja resolvida
    console.time("searching user datas")
    const user = await getUserPromise();
    //forma lenta de executar essas promises
    // const address = await getAddressAsync(user.id);
    // const phone = await getPhoneAsync(user.id);

    // forma mais rápida de executar essas promises
    // as duas promises vao ser executadas de forma assíncrona resultando em menor tempo de espera, ja que uma nao depende da outra para ser executada
    const results = await Promise.all([
       getAddressAsync(user.id),
       getPhoneAsync(user.id)
    ])
    console.timeEnd("searching user datas")
    // console.log("async await user", user);
    // console.log("async await address", results[0]);
    // console.log("async await phone", results[1]);
  } catch (error) {
    console.error("error no async await", error);
  }
};

main();
