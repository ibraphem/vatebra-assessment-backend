import bcrypt from "bcryptjs";

export const users = [
  {
    name: "Ibrahim Olayioye",
    email: "ibrahim@vatebraassesment.com",
    phone: "07031259185",
    password: bcrypt.hashSync("Password123"),
  },
];

export const tasks = [
  {
    date: "2023-04-03",
    todo: "Drilling",
    category: "pending",
  },
  {
    date: "2023-04-03",
    todo: "Dredging",
    category: "done",
  },
  {
    date: "2023-04-08",
    todo: "Digging",
    category: "todo",
  },
  {
    date: "2023-04-09",
    todo: "Piping",
    category: "done",
  },
  {
    date: "2023-04-10",
    todo: "Plastering",
    category: "done",
  },
  {
    date: "2023-04-15",
    todo: "Welding",
    category: "pending",
  },
  {
    date: "2023-04-15",
    todo: "Fencing",
    category: "pending",
  },

  {
    date: "2023-05-02",
    todo: "Baricading",
    category: "Pending",
  },
];

export const charts = [
  {
    date: "2023-01-01",
    value: 4000,
  },
  {
    date: "2023-01-30",
    value: 2210,
  },
  {
    date: "2023-02-01",
    value: 3400,
  },
  {
    date: "2023-02-25",
    value: 2000,
  },
  {
    date: "2023-03-01",
    value: 6500,
  },
  {
    date: "2023-03-30",
    value: 1100,
  },
  {
    date: "2023-04-01",
    value: 2100,
  },
  {
    date: "2023-04-10",
    value: 6000,
  },
  {
    date: "2023-04-20",
    value: 3000,
  },
  {
    date: "2023-04-30",
    value: 1100,
  },
];

export const locations = [
  {
    lat: "6.619136",
    lng: "3.3456128",
    address: "Afra road, Adeniyi Jones, Ikeja"
  },
];

export const lists = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031",
      age: "24",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      phone: "010-692-65931",
      age: "45",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      age: "18",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623",
      age: "89",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      age: "55",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      phone: "210-692-65935",
      age: "90",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      phone: "1-477-935-8478",
      age: "77",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      phone: "586.493.6943",
      age: "83",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      phone: "(775)976-6794",
      age: "47",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      phone: "024-648-3804",
      age: "65",
    },
  ];
  
