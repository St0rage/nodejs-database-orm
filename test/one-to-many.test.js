import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can insert and inclued", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "dani",
        title: "Insert Comment",
        description: "Description Comment",
      },
      include: {
        customer: true,
      },
    });

    console.info(comment);
  });

  it("should can insert and many relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "sarah",
        name: "Sarah",
        email: "sarah@wrg.com",
        phone: "812371623123",
        comments: {
          createMany: {
            data: [
              {
                title: "Comment 1",
                description: "Description 1",
              },
              {
                title: "Comment 2",
                description: "Description 2",
              },
            ],
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.info(customer);
  });

  it("should can find many with filter relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: "Comment",
            },
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.info(customers);
  });
});
