import PostItem from "./post_item";

var title = "Học ReactJS từ cơ bản đến nâng cao";
var style = {
  color: "red",
  backgroundColor: "blue",
};
function ListPost() {
  return (
    <div className="list-post">
      <h1>{title}</h1>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}

export default ListPost;
