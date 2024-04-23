import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can create one to one relation", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "dani",
        customer_id: "dani",
        balance: 1000000,
      },
      include: {
        customer: true,
      },
    });

    console.info(wallet);
  });

  it("should can create one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "fitri",
        name: "Fitri",
        email: "fitri@wrg.com",
        phone: "9123761238123",
        wallet: {
          create: {
            id: "fitri",
            balance: 500000,
          },
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("should can find one to one with relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "fitri",
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("should can find one to one with relation filter", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });
});
