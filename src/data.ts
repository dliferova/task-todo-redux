export type Type = {
  "type": string,
  "id": string,
  "attributes": {
    "title": string
  }
}

const types: Type[] = [
  {
    "type": "status",
    "id": "5cbf2fb3-dbf9-4db7-a7a3-abd15acc2b29",
    "attributes": {
      "title": "Personal task"
    }
  },
  {
    "type": "status",
    "id": "bbe8115b-5461-474e-bfd4-249c68e23cc5",
    "attributes": {
      "title": "Marketing task"
    }
  },
  {
    "type": "status",
    "id": "cc2a3a3e-24fa-450a-97b1-2881d9f27ccd",
    "attributes": {
      "title": "Sales task"
    }
  },
  {
    "type": "status",
    "id": "826d2a4c-775c-4669-b421-9677bde4bf6c",
    "attributes": {
      "title": "Development task"
    }
  },
  {
    "type": "status",
    "id": "e6803c9a-460d-4e32-8e5e-cda39bc8fd93",
    "attributes": {
      "title": "HR task"
    }
  }
]

export default types;
