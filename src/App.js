import "./styles.css";

export const App = (props) => {
  const { todoText } = props;
  const onClickAdd = () => {
    alert(todoText);
  };
  return (
    <div className="App">
      <input placeholder="TODOを入力" value={todoText} />
      <button onClick={onClickAdd}>追加</button>
      <br />
      <br />
      <p>未完了のTodo</p>
      <div>
        <ul>
          <li>
            <span>
              aaaa
              <button>完了</button>
              <button>削除</button>
            </span>
          </li>
        </ul>
      </div>
      <p>完了済みのTodo</p>
      <div>
        <ul>
          <li>
            <span>
              aaaa
              <button>戻す</button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
