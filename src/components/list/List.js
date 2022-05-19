
const List = (params) => {
  return (
    <>
    <div className={`flex gap-x-4 items-center`}>
       <div className="flex items-center p-1">
           {params.svg}
        </div>
        <h1 className={`text-white origin-left ${params.head && 'font-semibold text-xl'}   px-1 duratoin-300 ${!params.open && 'scale-0'}`}>{params.title}</h1>
       </div>
    </>
  )
}

export default List