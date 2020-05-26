import React from 'react';
import styles from '../Form.module.css';
import useSelect from '../hooks/useSelect';
const Form = ({setCategory}) => {

    const OPTION = [
        {value:'general', label:'General'},
        {value:'business', label:'Negocios'}, 
        {value:'entertainment', label:'Entretenimiento'},
        {value:'health', label:'Salud'},
        {value:'science', label:'Ciencia'},
        {value:'sports', label:'Deportes'},
        {value:'technology', label:'Tecnología'}
    ]
    // using the custom hook

    const [category, SelectNew] = useSelect('general',OPTION);
    
    // submit the form, put the category into app.js
    const searchNews = e =>{
        e.preventDefault();
        setCategory(category);
    }
    return ( 
        <div className={`${styles.block_search} row`}>
            <form 
            className="col s12 m8 offset-m2"
            onSubmit={searchNews}>
                <h2 className={styles.heading}>Encuentra tus noticias por categoria</h2>
                <SelectNew />

                <div className="input-field col s12">
                    <button type="submit" className={`${styles.btn_block} btn-large amber darken-2`}>
                        Buscar
                    </button>
                </div>
            </form>
      </div>
     );
}
 
export default Form;