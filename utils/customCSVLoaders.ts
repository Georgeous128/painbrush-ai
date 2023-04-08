import { Document } from 'langchain/document';
import { readFile } from 'fs/promises';
import { BaseDocumentLoader } from 'langchain/document_loaders';
import { BufferLoader } from './customPDFLoader';
import { CsvError } from 'csv-parse';
// Update this line to use require instead of import
import { parse as csvParse } from 'csv-parse';

// (BufferLoader and CustomPDFLoader classes remain the same)

// Create a new CustomCSVLoader class
export class CustomCSVLoader extends BufferLoader {
  public async parse(
    raw: Buffer,
    metadata: Document['metadata'],
  ): Promise<Document[]> {
    const content = raw.toString(); // Convert the Buffer to a string
    const parsed = await this.parseCSV(content); // Parse the CSV content

    // Process the parsed CSV data as desired, e.g., convert it into Document instances
    const documents = parsed.map((row, index) => {
      return new Document({
        pageContent: JSON.stringify(row), // Store the row data as a JSON string in the pageContent property
        metadata: {
          ...metadata,
          csv_rowIndex: index,
        },
      });
    });

    return documents;
  }

  private async parseCSV(content: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      csvParse(content, {}, (err?: CsvError, records?: any[][]) => {
        if (err) {
          reject(err);
        } else {
          resolve(records || []);
        }
      });
    });
  }
  
}
