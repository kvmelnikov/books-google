import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Style from './form-search.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { setSearchForm } from '../../services/form-search/form-search-slice';

export function FormSearch() {
  const dispatch = useAppDispatch()
  const {fields: {
    name: {value: name},
    category: { value: category},
    sorting: { value: sorting}
  }} = useAppSelector((state)=>state.formSearch)

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSearchForm(
      {
      field: e.target.name,
      value: e.target.value   
      }
    ))
  }

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>{
    dispatch(setSearchForm(
      {
      field: e.target.name,
      value: e.target.value   
      }
    ))
  }
  
    return (<Form className={Style.container_form} >
            <Form.Group className={Style.container_form_group_input} controlId="formBasicEmail">
              <Form.Control value={name} name='name' onChange={onChangeName} className={Style.input} 
              type="text" placeholder="name book" />
                <Button className={Style.button} variant="primary" type="submit">
                  Search
                </Button>
            </Form.Group>
            <Form.Group className={Style.container_form_group_select} controlId="formBasicEmail">
            <Form.Select  value={category} onChange={onChangeSelect} name="category"  aria-label="Default select example">
              <option value="all">all</option>
              <option value="art">art</option>
              <option value="computers">computers</option>
              <option value="history">history</option>
              <option value="medical">medical</option>
              <option value="poetry">poetry</option>
            </Form.Select>
           <Form.Select value={sorting} onChange={onChangeSelect} name="sorting"  aria-label="Default select example">
             <option value="relevance">relevance</option>
             <option value="newest">newest</option>
          </Form.Select>
          </Form.Group>
    </Form>)
}