import { join } from 'path';
import { existsSync } from 'fs';
import { H3Event, eventHandler, sendError, sendStream } from 'h3';
import sharp from "sharp";

export default eventHandler(async (event: H3Event) => {
    try {
        // Extract image path and query params
        const { imagePath } = event.context.params!;
        const query = getQuery(event);
        const width = query.width ? parseInt(query.width as string, 10) : null;
        const height = query.height ? parseInt(query.height as string, 10) : null;

        // Construct the full path to the image
        const baseDir = join(process.cwd(), 'public/data/images'); // Adjust to your image directory
        const fullPath = join(baseDir, imagePath);

        if (!existsSync(fullPath)) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Image not found',
            });
        }

        // Resize the image using sharp
        const transformer = sharp(fullPath).resize(width, height, { fit: 'cover' });

        // Set the response headers
        event.node.res.setHeader('Content-Type', 'image/jpeg');

        // Send the resized image as a stream
        return sendStream(event, transformer);
    } catch (error) {
        console.error('Error processing image:', error);
        return sendError(
            event,
            createError({
                statusCode: 500,
                statusMessage: 'Error processing image',
            })
        );
    }
});
