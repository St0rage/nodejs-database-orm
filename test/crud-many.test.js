import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can create many records", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "rudi",
          email: "rudi@wrg.com",
          phone: "1827364213",
          name: "Rudi",
        },
        {
          id: "melani",
          email: "melani@wrg.com",
          phone: "811712631242",
          name: "Melani",
        },
      ],
    });

    expect(count).toBe(2);
  });

  it("should can update many records", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "rudilagi@wrg.com",
      },
      where: {
        name: "Rudi",
      },
    });

    expect(count).toBe(1);
  });

  it("should can delete many records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "Tidak ada",
      },
    });

    expect(count).toBe(0);
  });

  it("should can read many records", async () => {
    const customers = await prismaClient.customer.findMany({});

    console.info(customers);

    expect(customers.length).toBe(6);
  });
});
