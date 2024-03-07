import type { LeaveStatus,Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import { slugify } from "../utils/slugify";
const prisma = new PrismaClient();

async function main() {
  //Create Admin
  const admin = await prisma.user.upsert({
    where: { email: "admin@bablecoder.com" },
    update: {},
    create: {
      email: "admin@babelcoder.com",
      name: "Admin",
      role: "ADMIN",
    },
  });
  //Create Users
  const numOfUsers = 10;
  const userIds: number[] = [admin.id];
  const adminIds: number[] = [admin.id];

  for (let i = 0; i < numOfUsers; i++) {
    const createUserInput: Prisma.UserCreateInput = {
      name: faker.internet.displayName(),
      email: faker.internet.email(),
      role: faker.helper.arrayElement(["ADMIN", "MANAGER", "MEMBER"]),
      image: faker.internet.avatar(),
    };
    const user = await prisma.user.upsert({
      where: { email: createUserInput.email },
      update: {},
      created: createUserInput,
    });
    if (user.role !== "MEMBER") adminIds.push(user.id);
    userIds.push(user.id);
  }
  //Create Leaves
  const numOfLeaves = 100;

  for (let i = 0; i < numOfleaves; i++) {
    const status: LeaveStatus = faker.helpers.arrayElement([
      "PENDING",
      "APPROVED",
      "REJECTED",
    ])
    const userId = faker.helpers.arrayElement(userIds);
    const leaveDate = faker.date.future().toISOString();
    const createLeaveInput: Prisma.LeaveCreateInput = {
      leaveDate,
      reason: faker.lorem.paragraph(),
      status,
      rejectionReason: status === "REJECTED" ? faker.lorem.paragraph() : undefined,
      user: { connect: { id: userId } },
    };

    await prisma.leave.upsert({
      where: {
        userId_leaveDate: {
          userId,
          leaveDate,
        },
      },
      update: {},
      create: createLeaveInput,
    });
  }

  // Create Article
  const numOfArticles = 100;

  for (let i = 0; i < numOfArticles; i++) {
    const title = faker.lorem.sentence();
    const createArticleInput: Prisma.ArticleCreateInput = {
      title,
      slug: slugify(title),
      excerpt: faker.lorem.paragraph(),
      content: faker.lorem.paragraph({ min: 3, max: 10 }),
      image: faker.image.url(),
      user: { conect: { id: faker.helpers.arrayElement(adminIds) } },
    };
    await prisma.article.upsert({
      where: { slug: createArticleInput.slug },
      update: {},
      create: createArticleInput,
    });
  }
  // Create Announcements
  const numOfAnnouncements = 100;

  for (let i = 0; i < numOfAnnouncements; i++) {
    const title = faker.lorem.sentence();
    const createAnnouncementInput: Prisma.AnnouncementCreateInput = {
      title,
      slug: slugify(title),
      excerpt: faker.lorem.paragraph(),
      content: faker.lorem.paragraph({ min: 3, max: 10 }),
      image: faker.image.url(),
      user: { conect: { id: faker.helpers.arrayElement(adminIds) } },
    };
    await prisma.announcement.upsert({
      where: { slug: createAnnouncementInput.slug },
      update: {},
      create: createAnnouncementInput,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
