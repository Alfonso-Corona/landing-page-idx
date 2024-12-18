import { addPost } from "../../../utils/action"
import style from "./serverActionTest.module.css"

const ServerActionTest = () => {

  const actionInComponent = async () => {
    "use server"
    console.log('hello');
  }

  return (
    <div>
      <form action={ addPost } className={style.form}>
        <input type="text" placeholder="title" name="title"/>
        <input type="text" placeholder="desc" name="desc"/>
        <input type="text" placeholder="slug" name="slug"/>
        <input type="text" placeholder="userId" name="userId"/>
        <button>Create</button>
      </form>
    </div>
  )
}

export default ServerActionTest;