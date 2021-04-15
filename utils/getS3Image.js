require('dotenv').config();

function getS3Image(filename){
  let getUrl = `https://${process.env.AWS_BUCKET_NAME}.s3-${process.env.AWS_REGION}.amazonaws.com/${filename}`
  return getUrl;
}

module.exports = getS3Image; 