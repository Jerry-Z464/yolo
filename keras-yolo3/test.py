import tensorflow as tf
from yolo import YOLO, detect_video
from PIL import Image
import os
os.environ['CUDA_VISIBLE_DEVICES'] = "1"

def detect_img(yolo):
    img = '10.jpg'
    try:
        image = Image.open(img)
    except Exception as e:
        print('Open Error! Try again!')
        print(e)
    else:
        r_image = yolo.detect_image(image)
        r_image.show()


# detect_img(YOLO())
path = '3.mp4'
output = './result/333333333.mp4'
detect_video(YOLO(), output_path=output)

