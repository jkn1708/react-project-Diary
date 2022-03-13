
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useState,useRef } from 'react';

// const dummyList=[
//   {
//     id:1,
//     author:"정상현",
//     content:"하이1",
//     emotion:3,
//     created_date:new Date().getTime()
//   },
//   {
//     id:2,
//     author:"수지",
//     content:"하이2",
//     emotion:5,
//     created_date:new Date().getTime()
//   },
//   {
//     id:3,
//     author:"현진",
//     content:"하이3",
//     emotion:2,
//     created_date:new Date().getTime()
//   },
//   {
//     id:4,
//     author:"무신",
//     content:"하이4",
//     emotion:5,
//     created_date:new Date().getTime()
//   },
// ]


function App() {

  const [data,setData] =useState([]);

  const dataId = useRef(0)

  const onCreate = (author,content,emotion) =>{
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current

    }
    dataId.current+=1
    setData([newItem,...data])
  }

  const onRemove = (targetId) =>{
    const newDiaryList = data.filter((it)=>it.id !== targetId)
    setData(newDiaryList)
  }
  const onEdit= (targetId,newContent)=>{
    setData(
      data.map((it)=>it.id === targetId ?{...it,content:newContent}:it)
    )
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;
