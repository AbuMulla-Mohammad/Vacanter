import mammoth from 'mammoth';
export async function docxToText(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        return result.value;
    } catch (error) {
        console.error('Error converting .docx to text:', error);
        throw error;
    }
}