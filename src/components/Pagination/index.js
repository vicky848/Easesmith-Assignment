import './index.css'

const Pagination = ({currentPage, totalPage, onPageChange }) => {



return  (


    <div className='pagination-container'>
        {
        Array.from({length:totalPage}, (_, index)=> (
            <button
            key = {index}
            onClick={() => onPageChange(index+1)}

            
            >{index+1}</button>
        ))


        }



    </div>
)

}

export default Pagination