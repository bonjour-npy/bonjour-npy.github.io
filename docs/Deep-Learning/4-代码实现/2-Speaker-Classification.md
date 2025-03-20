# Speaker Classification

:::tip[实战练习]

Transformer实战练习，代码见[Github仓库](https://github.com/bonjour-npy/Speaker-Classification)。

This is a practice of Transformer, follow the guide of [Github Repo](https://github.com/bonjour-npy/Speaker-Classification).

:::

![image-20240113175506430](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240113175506430.png)

## Overview

Classify the speaker of given features, learn how to use Transformer and how to adjust parameters of transformer.

## Dataset

The original dataset is [VoxCeleb1](https://www.robots.ox.ac.uk/~vgg/data/voxceleb/).

We randomly select 600 speakers from [VoxCeleb1](https://www.robots.ox.ac.uk/~vgg/data/voxceleb/), then preprocess the raw waveforms into mel-spectrograms. You can download the preprocessed dataset from [Google Drive](https://drive.google.com/file/d/1gaFy8RaQVUEXo2n0peCBR5gYKCB-mNHc/view?usp=drive_link).

![Screenshot 2024-01-13 163041](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesScreenshot%202024-01-13%20163041.png)

Arguments:

- data_dir: The path to the data directory.

- metadata_path: The path to the metadata.

- segment_len: The length of audio segment for training.

The architecture of dataset directory is shown below, where `uttr-{random string}.pt` represents PyTorch data file containing `valid mel-spectrogram data`.

```
data directory/
├── mapping.json
├── metadata.json
├── testdata.json
└── uttr-{random string}.pt
```

## Related

This is also the assignment solution of [ML2021Spring HW4](https://speech.ee.ntu.edu.tw/~hylee/ml/2021-spring.php).