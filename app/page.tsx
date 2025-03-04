import PostForm from "./components/PostForm";
import PostArea from "./components/PostsArea";


export default function Home() {
  return (
    <main className="flex w-full justify-around mt-10 ">
      <PostArea/>
      <PostForm/>
    </main>
  );
}
