import PropTypes from 'prop-types';
import { Header, Form, Button, SearchIcon, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
    return (
        <Header>
            <Form onSubmit={onSubmit}>
                <Input
                    name="searchField"
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />

                <Button type="submit" area-label="Search" title="Search">
                    <SearchIcon size="30px" />
                </Button>
            </Form>
        </Header>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};
