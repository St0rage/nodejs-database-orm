import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "dani",
        email: "daniyudistira25@gmail.com",
        name: "Dani Yudistira Maulana",
        phone: "085951415082",
      },
    });

    expect(customer.id).toBe("dani");
    expect(customer.email).toBe("daniyudistira25@gmail.com");
    expect(customer.name).toBe("Dani Yudistira Maulana");
    expect(customer.phone).toBe("085951415082");
  });

  it("should be able to update customer", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "Dani Yudistira",
      },
      where: {
        id: "dani",
      },
    });

    expect(customer.id).toBe("dani");
    expect(customer.email).toBe("daniyudistira25@gmail.com");
    expect(customer.name).toBe("Dani Yudistira");
    expect(customer.phone).toBe("085951415082");
  });

  it("should be able to read customer", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "dani",
      },
    });

    expect(customer.id).toBe("dani");
    expect(customer.email).toBe("daniyudistira25@gmail.com");
    expect(customer.name).toBe("Dani Yudistira");
    expect(customer.phone).toBe("085951415082");
  });

  it("should be able to delete customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "dani",
      },
    });

    expect(customer.id).toBe("dani");
    expect(customer.email).toBe("daniyudistira25@gmail.com");
    expect(customer.name).toBe("Dani Yudistira");
    expect(customer.phone).toBe("085951415082");
  });
});
