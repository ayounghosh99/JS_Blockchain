# JS_Blockchain


This is my second take on development of blockhain. In this blockchain, in this blockchain i have sticked with bare minimum. I have implemented this Blockchain in pure Javascript.


This blockchain starts off with an initial block called the Genesis Block. The contents of each block contains the following fields:
1. Index
2. Data
3. Timestamp
4. previousHash
5. Hash

 The block’s hash is a SHA256 hash that is made from combining all the fields listed above. What’s cool about this blockchain is that every block will contain the hash of the previous block. This means that the chain becomes immutable. If any of the data in the previous blocks were to change, then the block would contain a new hash, resulting in an invalidation of the rest of the chain.
 
 
 The block class's constructor contains all the information that we would want for a new block. The only function in this class is calculateHash(). 
 
 The purpose of the blockchain class is to hold the actual chain and provide us with some functions that we can use to interact with the blockchain. 
 
 Finally, i created a class called app. This will be the class that i use to run the program.
