import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Style from './form-search.module.css'

export function FormSearch() {
    return <Form className={Style.container_form} >
            <Form.Group className={Style.container_form_group_input} controlId="formBasicEmail">
              <Form.Control className={Style.input} type="text" placeholder="name book" />
                <Button className={Style.button} variant="primary" type="submit">
                  Search
                </Button>
            </Form.Group>
            <Form.Group className={Style.container_form_group_select} controlId="formBasicEmail">
            <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
            </Form.Group>


    </Form>
}