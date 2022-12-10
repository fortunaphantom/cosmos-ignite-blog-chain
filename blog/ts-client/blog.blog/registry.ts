import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreatePost } from "./types/blog/blog/tx";
import { MsgCreateComment } from "./types/blog/blog/tx";
import { MsgDeleteComment } from "./types/blog/blog/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/blog.blog.MsgCreatePost", MsgCreatePost],
    ["/blog.blog.MsgCreateComment", MsgCreateComment],
    ["/blog.blog.MsgDeleteComment", MsgDeleteComment],
    
];

export { msgTypes }