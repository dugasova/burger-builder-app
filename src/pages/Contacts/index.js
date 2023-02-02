import React, { useEffect, useState } from "react";
import styled  from "styled-components";
import Loader from "../../components/Loader";
import axios from "axios";

const Contacts = () => {
    const [contacts, setContacts] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        (async() => {
            axios.get('https://burger-api-xcwp.onrender.com/contact').then((result) => {

                setContacts(result.data[0])
                setLoading(false);
            }).catch( (err) => {
                console.error(err.message)
            })
        })();
    }, [])

    return (
        <>
        <ContactsStyled>
            {loading ? (<Loader />) : (
                <WrapperStyled>
                    <ListStyled>
                    <HeaderStyled>Our contacts</HeaderStyled>
                    {Object.keys(contacts).map((contact) => {
                        return(
                            contact !== "locations" &&
                            contact !== "_id" &&
                            contact !== "tags" && (
                                <ListItemStyled key={contact}>
                                    <h3>{contact}: <span>{contacts[contact]}</span></h3>
                                </ListItemStyled>
                            )
                        )
                    })}
                    </ListStyled>
                </WrapperStyled>
            )
            }   
        </ContactsStyled>
        </>
    );
};
const WrapperStyled = styled.div({
    textAlign: "center",
    paddingTop: "100px"

});

const ContactsStyled = styled.div({
    display: "flex",
    justifyContent: "center"

})
const ListStyled = styled.ul({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
    height: "500px",
    width: "700px",
    boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
    borderRadius: "20px",
    listStyle: "none"
});
const ListItemStyled = styled.li({
    paddingTop: '20px',
    color: "#3c1414"
});

const HeaderStyled = styled.h1({
    marginBottom: "50px",
    color: "#3c1414"
});

export default Contacts;