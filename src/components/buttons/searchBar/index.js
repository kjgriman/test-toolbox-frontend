const SearchBar = ({onChangeHandler}) => {

    return (
        
        <div className="input-group">
        <div className="form-outline">
            <input type="search" id="form1" className="form-control" list="listFiles" onChange={onChangeHandler} />
            <datalist id="listFiles">
                <option value='test1.csv'></option>
                <option value='test2.csv'></option>
                <option value='test3.csv'></option>
                <option value='test4.csv'></option>
                <option value='test5.csv'></option>
                <option value='test6.csv'></option>
            </datalist>
        </div>
    </div>
    );
};

export default SearchBar;