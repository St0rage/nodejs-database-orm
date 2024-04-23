import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can execute sequential transaction", async () => {
    const [dani, dian] = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: "dani",
          email: "dani@wrg.com",
          name: "Dani",
          phone: "89371239423",
        },
      }),
      prismaClient.customer.create({
        data: {
          id: "dian",
          email: "dian@wrg.com",
          name: "Dian",
          phone: "28371234561",
        },
      }),
    ]);

    expect(dani.name).toBe("Dani");
    expect(dian.name).toBe("Dian");
  });

  it("should can execute interactive transaction", async () => {
    const [dani, dian] = await prismaClient.$transaction(async (prisma) => {
      const dani = await prisma.customer.create({
        data: {
          id: "dani1",
          email: "dani1@wrg.com",
          name: "Dani",
          phone: "987718123123",
        },
      });
      const dian = await prisma.customer.create({
        data: {
          id: "dian1",
          email: "dian1@wrg.com",
          name: "Dian",
          phone: "91237412364",
        },
      });

      return [dani, dian];
    });

    expect(dani.name).toBe("Dani");
    expect(dian.name).toBe("Dian");
  });
});
