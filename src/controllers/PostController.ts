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
    console.error(`Error creating post: ${e}`);
  }
}

// Fungsi Show Data By ID
export async function getPostById(id: string) {
  try {
    const postId = parseInt(id);

    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      return {
        success: true,
        message: "Detail Data Post not found!",
        data: null,
      };
    }

    return {
      success: true,
      message: `Detail Data Post By ID : ${id}`,
      data: post,
    };
  } catch (e: unknown) {
    console.error(`Error creating post: ${e}`);
  }
}

// Fungsi Update Data
export async function updatePost(
  id: string,
  options: { title?: string; content?: string }
) {
  try {
    const postId = parseInt(id);

    const { title, content } = options;

    const post = await prisma.post.update({
      where: { id: postId },
      data: {
        ...(title ? { title } : {}),
        ...(content ? { content } : {}),
      },
    });

    return {
      success: true,
      message: "Post Updated Successfully!",
      data: post,
    };
  } catch (e: unknown) {
    console.error(`Error updating post: ${e}`);
  }
}
