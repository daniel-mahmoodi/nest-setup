import * as sharp from 'sharp';
import * as mkdirp from 'mkdirp';

export const SaveImage = async (file: Express.Multer.File) => {
  const destination = 'files/';
  mkdirp.sync(destination);
  await sharp(file.buffer).toFile(destination + file.originalname);
};
