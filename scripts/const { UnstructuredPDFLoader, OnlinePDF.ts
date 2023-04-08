const { UnstructuredPDFLoader, OnlinePDFLoader } = require('langchain/document_loaders');
const { RecursiveCharacterTextSplitter } = require('langchain/text_splitter');
const { Chroma, Pinecone } = require('langchain/vectorstores');
const { OpenAIEmbeddings } = require('langchain/embeddings/openai');
const { OpenAI } = require('langchain/llms');
const { load_qa_chain } = require('langchain/chains/question_answering');
const pinecone = require('pinecone-client');

const loader = new UnstructuredPDFLoader('/Users/anakhinheorhii/Alloy.pdf');
// const loader = new OnlinePDFLoader('https://wolfpaulus.com/wp-content/uploads/2017/05/field-guide-to-data-science.pdf');

const data = loader.load();
console.log(`You have ${data.length} document(s) in your data`);
console.log(`There are ${data[0].page_content.length} characters in your document`);

const text_splitter = new RecursiveCharacterTextSplitter({ chunk_size: 1000, chunk_overlap: 0 });
const texts = text_splitter.split_documents(data);
console.log(`Now you have ${texts.length} documents`);

const embeddings = new OpenAIEmbeddings({ openai_api_key: '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' });

// initialize Pinecone
pinecone.init({
  api_key: '18c867d2-b255-4748-9067-6c7f633ec571', // find at app.pinecone.io
  environment: 'asia-southeast1-gcp' // next to api key in console
});

const index_name = 'default';
const docsearch = new Pinecone({ embeddings, index_name });
const query = 'When Alloy starts its work?';
const docs = await docsearch.similarity_search(query, { include_metadata: true });

const llm = new OpenAI({ temperature: 0, openai_api_key: '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' });
const chain = await load_qa_chain(llm, { chain_type: 'stuff' });

const question = 'When Alloy starts its work?';
const docs2 = await docsearch.similarity_search(question, { include_metadata: true });
const answers = await chain.run({ input_documents: docs2, question });
console.log(answers);
export { };

