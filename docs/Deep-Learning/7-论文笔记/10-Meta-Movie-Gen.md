# Movie Gen: A Cast of Media Foundation Models

:::info[相关资料]

Meta 官方博客：https://ai.meta.com/blog/movie-gen-media-foundation-models-generative-ai-video/

Meta 官方技术报告：https://ai.meta.com/static-resource/movie-gen-research-paper

:::

## 主要功能展示

Meta Movie Gen 可以实现具有同步音频的视频生成、个性化角色的视频生成并支持视频编辑。

Movie Gen 实现的主要功能来自于提出的两个 foundation model，分别为 Movie Gen Video 以及 Movie Gen Audio。

- Movie Gen Video：30B 参数的大模型，支持 T2I 以及 T2V 的联合生成，最高可根据输入的文本提示生成 16 秒的 1080P HD 视频。
- Movie Gen Audio：13B 参数的大模型，支持 V2A 以及 T2A，最高可根据输入的视频以及文本提示生成 48kHz 的高质量同步音频。

### Text-to-Video 视频生成

<video width="100%" height="100%" autoplay loop controls>
    <source src="https://video-xsp1-2.xx.fbcdn.net/o1/v/t2/f2/m69/AQPiVwlpt0o56n5kQnldQ-we0lKIfuMSlf2lM95Qmas72Go9TJysToEl6buU1jqT1QnEVTAizFxQpbhKHlJiFJiY.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=video-xsp1-2.xx.fbcdn.net&_nc_cat=107&strext=1&vs=3d8ab693f43fa921&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQWJwaHh2aWozQmFxeUVEQU1kUnNVTmt2RUl6Ym1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dPbVJoaHNvYTdpRHk4TURBQkVSZVhnUTJkSlhickZxQUFBRhUCAsgBAEsHiBJwcm9ncmVzc2l2ZV9yZWNpcGUBMQ1zdWJzYW1wbGVfZnBzABB2bWFmX2VuYWJsZV9uc3ViACBtZWFzdXJlX29yaWdpbmFsX3Jlc29sdXRpb25fc3NpbQAoY29tcHV0ZV9zc2ltX29ubHlfYXRfb3JpZ2luYWxfcmVzb2x1dGlvbgAddXNlX2xhbmN6b3NfZm9yX3ZxbV91cHNjYWxpbmcAEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcjBdAAAAAAAAAABERAAAAJr7Mjd7xmusNFQIoAkMzGAt2dHNfcHJldmlldxwXQDob52yLQ5YYGWRhc2hfaDI2NC1iYXNpYy1nZW4yXzcyMHASABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCogVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAM5OTcRb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA81MjM1Mjk4MjA2MzY3ODQSb2VtX3ZpZGVvX2Fzc2V0X2lkDzM4ODk1MzMzNDI2ODM2MhVvZW1fdmlkZW9fcmVzb3VyY2VfaWQQMzg5NDkzMjEyNzQ2MjE3NRxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkDzUzOTg0NDM1NTA4MjQxNw52dHNfcmVxdWVzdF9pZAAlAhwAJb4BGweIAXMEMTcwNQJjZAoyMDI0LTEwLTAzA3JjYgM5MDADYXBwBuinhumikQJjdBFDTVNfTUVESUFfTUFOQUdFUhNvcmlnaW5hbF9kdXJhdGlvbl9zCTI2LjEwOTQxNwJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=9-4&oh=00_AYCszJkcEKMLCeqWbFCBk5g-ZCs9Iy63w6lGSbQlp9tEPg&oe=6709790A&_nc_sid=1d576d&_nc_rid=299321509316915&_nc_store_type=1" type="video/mp4">
</video>

### 个性化视频

<video width="100%" height="100%" autoplay loop controls>
    <source src="https://video-xsp1-2.xx.fbcdn.net/o1/v/t2/f2/m69/AQOvFTvzMc4bgV0UnKk434s09calfDp_gjzyUeu1PT9805-esb4Ri0sObRJ-KI7JmOlqkTI-Q9jpRLi_oZufrdgL.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=video-xsp1-2.xx.fbcdn.net&_nc_cat=109&strext=1&vs=6855ae7eccaeae68&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRTNmaWh1cWd6XzFaczBOQUZLaXFrcmx6cjU1Ym1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dIWkxpeHNiT2pDSmM5OERBTmxnNThuMTVJWmZickZxQUFBRhUCAsgBAEsHiBJwcm9ncmVzc2l2ZV9yZWNpcGUBMQ1zdWJzYW1wbGVfZnBzABB2bWFmX2VuYWJsZV9uc3ViACBtZWFzdXJlX29yaWdpbmFsX3Jlc29sdXRpb25fc3NpbQAoY29tcHV0ZV9zc2ltX29ubHlfYXRfb3JpZ2luYWxfcmVzb2x1dGlvbgAddXNlX2xhbmN6b3NfZm9yX3ZxbV91cHNjYWxpbmcAEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcjBdAAAAAAAAAABERAAAAJqyzz-av3twDFQIoAkMzGAt2dHNfcHJldmlldxwXQC-HrhR64UgYGWRhc2hfaDI2NC1iYXNpYy1nZW4yXzcyMHASABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCogVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAM5OTcRb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZBA0MzMxOTcxNjgwMzYyMzgzEm9lbV92aWRlb19hc3NldF9pZBA4ODI4NTIxODU3MTYwNDkyFW9lbV92aWRlb19yZXNvdXJjZV9pZBAxMDQ4MzU2MzkzMTg0NDcwHG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQQMjU4NTExOTI0ODU0MjQzNw52dHNfcmVxdWVzdF9pZAAlAhwAJb4BGweIAXMEOTU4OQJjZAoyMDI0LTEwLTAzA3JjYgM5MDADYXBwBuinhumikQJjdBFDTVNfTUVESUFfTUFOQUdFUhNvcmlnaW5hbF9kdXJhdGlvbl9zCDE1Ljc2NTc1AnRzFXByb2dyZXNzaXZlX2VuY29kaW5ncwA&ccb=9-4&oh=00_AYBxAm-MDVsX_8GtEyDxahhS6vwG2NEYpWkszJAApMFH3w&oe=67098AF0&_nc_sid=1d576d&_nc_rid=519931164051780&_nc_store_type=1" type="video/mp4">
</video>

### 视频精确编辑

<video width="100%" height="100%" autoplay loop controls>
    <source src="https://video-xsp1-2.xx.fbcdn.net/o1/v/t2/f2/m69/AQPADa5iZqEcmRQ9qzlM4unPbF35nZRKF9_l4ENCmQnjRtjlrmSUj3iaa_JcdqtpVhhJtS_1z5cY4OPR0X5hhsah.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=video-xsp1-2.xx.fbcdn.net&_nc_cat=108&strext=1&vs=c39330cf123af574&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTFhmaXh1cUhUa1BIRW9IQU9weWtGS2hGbmR3Ym1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dCeDZqQnRzWUs4U3lkUURBR3d6SzJVaXYzOTdickZxQUFBRhUCAsgBAEsHiBJwcm9ncmVzc2l2ZV9yZWNpcGUBMQ1zdWJzYW1wbGVfZnBzABB2bWFmX2VuYWJsZV9uc3ViACBtZWFzdXJlX29yaWdpbmFsX3Jlc29sdXRpb25fc3NpbQAoY29tcHV0ZV9zc2ltX29ubHlfYXRfb3JpZ2luYWxfcmVzb2x1dGlvbgAddXNlX2xhbmN6b3NfZm9yX3ZxbV91cHNjYWxpbmcAEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcjBdAAAAAAAAAABERAAAAJqCVyY6TlIECFQIoAkMzGAt2dHNfcHJldmlldxwXQEGJul41P30YGWRhc2hfaDI2NC1iYXNpYy1nZW4yXzcyMHASABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCogVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAM5OTcRb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZBAxMjk2ODQ3NjU4MzU3ODU3Em9lbV92aWRlb19hc3NldF9pZA84OTY2NTU5MDE4NDc2MDQVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzU2NTQ5NTEzOTQ3NjgxNhxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkEDEwMzg0NDQ4ODQ2NDkxODYOdnRzX3JlcXVlc3RfaWQAJQIcACW-ARsHiAFzBDcyMzUCY2QKMjAyNC0xMC0wNANyY2IDOTAwA2FwcAbop4bpopECY3QRQ01TX01FRElBX01BTkFHRVITb3JpZ2luYWxfZHVyYXRpb25fcwkzNS4wNzY3MDgCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA&ccb=9-4&oh=00_AYAGuULjmCpQmV-vrwKfzdSXqaQiG44abmWhlu3yyk6USA&oe=6709B657&_nc_sid=1d576d&_nc_rid=133263937467898&_nc_store_type=1" type="video/mp4">
</video>

### 音频生成

<video width="100%" height="100%" autoplay loop muted controls>
    <source src="https://video-xsp1-2.xx.fbcdn.net/o1/v/t2/f2/m69/AQOpzEj_Z2RBkJ41rerEkfPgLmwqdJBSfXbrh42Q8udD2EN3kMqJdk_EBKDRWkqF07JkKjGNQcxpHtI84J3hefeh.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=video-xsp1-2.xx.fbcdn.net&_nc_cat=103&strext=1&vs=a6425d4ff01d627f&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQ3h3aHh0d1NSWk1xZFFCQUd6MV9nVkNWQndfYm1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dNd0NoaHVMR2pFN3lLMERBRjZGRldLNFBvbG1ickZxQUFBRhUCAsgBAEsHiBJwcm9ncmVzc2l2ZV9yZWNpcGUBMQ1zdWJzYW1wbGVfZnBzABB2bWFmX2VuYWJsZV9uc3ViACBtZWFzdXJlX29yaWdpbmFsX3Jlc29sdXRpb25fc3NpbQAoY29tcHV0ZV9zc2ltX29ubHlfYXRfb3JpZ2luYWxfcmVzb2x1dGlvbgAddXNlX2xhbmN6b3NfZm9yX3ZxbV91cHNjYWxpbmcAEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcjBdAAAAAAAAAABERAAAAJtbZ5a_Ax_YBFQIoAkMzGAt2dHNfcHJldmlldxwXQD4HrhR64UgYGWRhc2hfaDI2NC1iYXNpYy1nZW4yXzcyMHASABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCogVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAM5OTcRb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA84OTYyNTA0NTIwNzg1NDUSb2VtX3ZpZGVvX2Fzc2V0X2lkEDEwNTI0NDA4MjYxNjQxODQVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzU0MjE4ODEzMTYyODY1MRxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkEDEyMDA2MjgzNjc4MTEwOTMOdnRzX3JlcXVlc3RfaWQAJQIcACW-ARsHiAFzBDY2NDACY2QKMjAyNC0xMC0wMwNyY2IDOTAwA2FwcAbop4bpopECY3QRQ01TX01FRElBX01BTkFHRVITb3JpZ2luYWxfZHVyYXRpb25fcwUzMC4wMwJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=9-4&oh=00_AYC9juBXquGWIlhEZ5BBihwbyj1HfPYgiUNDhrjjzlwYhQ&oe=6709770A&_nc_sid=1d576d&_nc_rid=670838906233448&_nc_store_type=1" type="video/mp4">
</video>


## 图像和视频联合生成（Joint Image and Video Generation）

![image-20241010215842535](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20241010215842535.png)
