
# **Fixtures**

>* [Return to index](../README.md)

<br>

Son un conjunto de recursos como datos JSON para usarlo en las interacciones de las pruebas. Básicamente, nos ayuda a obtener la entrada de datos de archivos externos.

>Estos se pueden crear/encontrar en el directorio ```./cypress/fixtures/```.

<br>
Por ejemplo pordemos crear el siguiente fixture:

```JSON
    {
        "searchInput" : "#search_query_top",
        "searchButton" : "#searchbox > .btn"
    }
```

Una vez creado lo podemos implementar en un Object Page de una forma facil ya que solo se requiere implementar el metodo.

```JS
// Using Fixtures
    class indexPage {

        // Metodo
        search = (element) => {
            // Uso del fixture y los valores contenidos en el (locators)
            cy.fixture('index.json').then((locators) => {
                cy.get(locators.searchInput).type(element);
                cy.get(locators.searchButton).click();
            });
        }
    }
```