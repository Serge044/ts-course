// Request
interface Request {
    animal: "cat" | "dog" | "bird";
    breed: string;
    sterilized?: string;
  }
  
  // Response #1
  
  interface ResponseAvailable {
    status: "available";
    data: {
      animal: "cat" | "dog" | "bird";
      breed: string;
      sterilized?: string;
      location: string;
      age?: number;
    };
  }
  
  // Response #2
  
  interface ResponseNotAvailable {
    status: "not available";
    data: {
      message: string;
      nextUpdateIn: Date;
    };
  }
  
  const dog: ResponseAvailable = {
    status: "available",
    data: {
      animal: "dog",
      breed: "volchara",
      sterilized: "no",
      location: "Odesa",
      age: 2,
    },
  };
  
  const animalNotAvailable: ResponseNotAvailable = {
    status: "not available",
    data: {
      message: "Unfortunately not awailable now ;( But visit us later!",
      nextUpdateIn: new Date("December 17, 2023 03:24:00"),
    },
  };
  
  function isAvailable(
    animal: ResponseAvailable | ResponseNotAvailable
  ): animal is ResponseAvailable {
    return (animal as ResponseAvailable).data.breed !== undefined;
  }
  
  function checkAnimalData(animal: ResponseAvailable | ResponseNotAvailable) {
    if (isAvailable(animal)) {
      return animal.data;
    } else {
      return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
    }
  }
  
  console.log(checkAnimalData(dog));
  console.log(checkAnimalData(animalNotAvailable));
  