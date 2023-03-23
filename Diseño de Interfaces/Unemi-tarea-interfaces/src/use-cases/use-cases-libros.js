// Crear un diagrama de casos de uso
var diagram = new jsUML2.diagrams.useCaseDiagram("diagram-container");

// Crear los actores
var usuario = new jsUML2.elements.actor("Usuario");
var sistema = new jsUML2.elements.actor("Sistema");

// Agregar los actores al diagrama
diagram.addElement(usuario);
diagram.addElement(sistema);

// Crear los casos de uso
var registrarLibro = new jsUML2.elements.useCase("Registrar libro");
var eliminarLibro = new jsUML2.elements.useCase("Eliminar libro");
var buscarPorTitulo = new jsUML2.elements.useCase("Buscar libro por título");
var buscarPorISBN = new jsUML2.elements.useCase("Buscar libro por ISBN");
var abastecerLibro = new jsUML2.elements.useCase("Abastecer libro");
var venderLibro = new jsUML2.elements.useCase("Vender libro");
var cantidadAbastecimiento = new jsUML2.elements.useCase("Cantidad de abastecimientos");
var libroMasCostoso = new jsUML2.elements.useCase("Libro más costoso");
var libroMenosCostoso = new jsUML2.elements.useCase("Libro menos costoso");
var libroMasVendido = new jsUML2.elements.useCase("Libro más vendido");

// Agregar los casos de uso al diagrama
diagram.addElement(registrarLibro);
diagram.addElement(eliminarLibro);
diagram.addElement(buscarPorTitulo);
diagram.addElement(buscarPorISBN);
diagram.addElement(abastecerLibro);
diagram.addElement(venderLibro);
diagram.addElement(cantidadAbastecimiento);
diagram.addElement(libroMasCostoso);
diagram.addElement(libroMenosCostoso);
diagram.addElement(libroMasVendido);

// Agregar las relaciones entre los elementos del diagrama
diagram.addRelationship(new jsUML2.relationships.generalization(usuario, [registrarLibro, eliminarLibro, buscarPorTitulo, buscarPorISBN, abastecerLibro, venderLibro, cantidadAbastecimiento, libroMasCostoso, libroMenosCostoso, libroMasVendido]));
diagram.addRelationship(new jsUML2.relationships.include(venderLibro, buscarPorISBN));
diagram.addRelationship(new jsUML2.relationships.include(venderLibro, buscarPorTitulo));
diagram.addRelationship(new jsUML2.relationships.include(abastecerLibro, buscarPorISBN));
diagram.addRelationship(new jsUML2.relationships.include(abastecerLibro, buscarPorTitulo));
