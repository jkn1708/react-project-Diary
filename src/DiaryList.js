import DiaryItem from "./DiaryItem"

const DiaryList = ({onRemove,diaryList,onEdit}) =>{
    return <div className="DiaryList">
        <h2>일기리스트</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
        <div>
            {diaryList.map((it)=>(
                <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit}/>
            ))}
        </div>
    </div>

}
DiaryList.defaultProps={           //데이터 자료가 없을 때 기본 값을 지정
    diaryList:[],
}

export default DiaryList