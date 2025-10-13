import prisma from "../../prisma/client";

// Fungsi Show Data
export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({ orderBy: { id: "desc" } });

    return {
      success: true,
      message: "List Data Posts",
      data: posts,
    };
  } catch (e: unknown) {
    console.error(`Error getting posts: ${e}`);
  }
}

// Fungsi Create Data
export async function createPosts(options: { title: string; content: string }) {
  try {
    const { title, content } = options;

    const post = await prisma.post.create({
      data: {
        title: title,
        content: content,
      },
    });

    return {
      success: true,
      message: "Post Created Successfully!",
      data: post,
    };
  } catch (e: unknown) {
    console.log(`Error creating post: ${e}`);
  }
}
