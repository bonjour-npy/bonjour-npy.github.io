# k-fold cross-validation

## What is k-fold cross-validation

K-fold cross-validation is a technique used in machine learning to evaluate the performance of a model. The basic idea behind k-fold cross-validation is to split the dataset into $k$ partitions, or folds, and then train and test the model $k$ times, **using a different fold for testing each time**.

## How does k-fold cross-validation work?

In each iteration of k-fold cross-validation, one of the $k$ folds is used as the **test set**, while the remaining $k-1$ folds are used as the training set. This process is repeated $k$ times, with each fold being used **exactly once as the test set**. The results from each iteration can then be averaged to produce a more accurate estimate of the model's performance.

## Summary

- train set: to train the model and do parameter update
- validation set: to choose hyperparameter
- test set: the final test, only used once

