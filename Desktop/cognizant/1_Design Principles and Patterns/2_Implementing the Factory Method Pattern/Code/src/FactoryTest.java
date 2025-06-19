public class FactoryTest {
    public static void main(String[] args){
        DocumentFactory wordFactory=new WordDocumentFactory();
        Document wordDoc=wordFactory.createDocument();
        wordDoc.open();

        DocumentFactory pdfDocumentFactory=new PdfDocumentFactory();
        Document pdfDoc=pdfDocumentFactory.createDocument();
        pdfDoc.open();
        
        DocumentFactory excelDocumentFactory=new ExcelDocumentFactory();
        Document excelDoc=excelDocumentFactory.createDocument();
        excelDoc.open();

    }
    
}
