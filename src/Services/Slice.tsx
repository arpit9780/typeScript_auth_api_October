import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  dataField,
  interReducer,
  loginField,
  PostField,
  signupField,
} from "../Components/Interface";
import instance from "../Config/Config";

const initialState: interReducer = {
  user: [],
  error: [],
  posts: [],
  createPost: [],
  updatePost: [],
  status:"",
  adminUser:"",
  adminPost:"",
  adminDeletePost:"",
};

export const loginAuth: any = createAsyncThunk(
  "loginUser",
  async (data: loginField, { rejectWithValue, fulfillWithValue }) => {
 
    try {
      const res = await instance.post("/login", data);
   
      return fulfillWithValue(res);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const signupUser = createAsyncThunk(
  "signupUser",
  async (data: signupField, { rejectWithValue, fulfillWithValue }) => {
    console.log(data);
    try {
      const res = await instance.post("/register", data);
      return fulfillWithValue(res);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const showPost = createAsyncThunk("showPost", async () => {
  try {
    const res = await instance.get("/get");
    return res.data;
  } catch (error) {
    return error;
  }
});

export const createNewPost = createAsyncThunk(
  "createNewPost",
  async (data: PostField, { rejectWithValue, fulfillWithValue }) => {

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("age", data.age);
    formData.append("city", data.city);
    formData.append("salary", data.salary);
    formData.append("domain", data.domain);
    formData.append("image", data.image[0]);
    try {
      const res = await instance.post("/post", formData);
   
      return fulfillWithValue(res);
    } catch (error) {
     
      return rejectWithValue(error);
    }
  }
);

export const updateNewPost = createAsyncThunk(
  "updatePost",
  async (data: PostField, { rejectWithValue, fulfillWithValue }) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("age", data.age);
    formData.append("city", data.city);
    formData.append("salary", data.salary);
    formData.append("domain", data.domain);
    formData.append("image", data.image[0]);

    try {
      const res = await instance.put(`/update/${data._id}`, formData);
  
      return fulfillWithValue(res);
    } catch (error) {
     
      return rejectWithValue(error);
    }
  }
);


export const adminLogin = createAsyncThunk(
  "adminLogin",
  async (data: loginField, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await instance.post("/admin/login", data);
      return fulfillWithValue(res.data);
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const showUserToAdmin = createAsyncThunk("showUserToAdmin",async()=>
{
  try {
    const res = await instance.get("/allUser")
    return res.data
  } catch (error) {
    return error
    }
}
)

export const blockUser = createAsyncThunk("blockUser", async(userData:signupField)=> {
  console.log(85,userData);
  const body = {
     "email" : userData.email
  }
  try {
    const res = await instance.put(`/block/${userData._id}`,body)
    console.log(86,res.data);
    return res.data
  } catch (error) {
    return error 
  }
})

export const unblockUser = createAsyncThunk("unblockUser",async(userData:signupField) => {
  console.log(85,userData);
  const body = {
    "email" : userData.email
  }
  try {
    const res = await instance.put(`/unblock/${userData._id}`,body)
    console.log(86,res.data)
    return res.data
  } catch (error) {
    return error
  }
})

export const seePosts = createAsyncThunk("seePosts",async()=>{
   try {
      const res = await instance.get("/all") 
      return res.data
   } catch (error) {
    console.log(76,error);
    return error
   }
})

export const deletePost = createAsyncThunk("deletePost",async(data:dataField)=>{
  console.log(36,data)
  try {
     const res = await instance.delete(`/delete/${data}`) 
     return res.data
  } catch (error) {
   console.log(76,error);
   return error
  }
})

export const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    
    builder.addCase(loginAuth.fulfilled, (state, action) => {

      state.user = action.payload;
      // state.status="success";

    });
    builder.addCase(loginAuth.rejected, (state, action) => {
      state.error = action.payload;
      // state.status="fail";
    });
    

    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.user = action.payload;
      // state.status="success";
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.error = action.payload;
      // state.status="fail";
    });
  


    builder.addCase(showPost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status="success";
    });
    builder.addCase(showPost.rejected, (state, action) => {
      state.error = action.payload;
      state.status="fail";
    });
    builder.addCase(showPost.pending, (state) => {
      state.status="pending";
    });

  
    builder.addCase(createNewPost.fulfilled, (state, action) => {
      state.createPost = action.payload;
      // state.status="success";
    });
    builder.addCase(createNewPost.rejected, (state, action) => {
      state.error = action.payload;
      // state.status="fail";
    });
    

    builder.addCase(updateNewPost.fulfilled, (state, action) => {
      state.updatePost = action.payload;
      // state.status="success";
    });
    builder.addCase(updateNewPost.rejected, (state, action) => {
      state.error = action.payload;
      // state.status="fail";
    });

    builder.addCase(adminLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      // state.status="success";
    });
    builder.addCase(adminLogin.rejected, (state, action) => {
      state.error = action.payload;
      // state.status="fail";
    });

    builder.addCase(showUserToAdmin.fulfilled, (state, action) => {
      state.posts = action.payload;
      // state.status="success";
    });
    builder.addCase(showUserToAdmin.rejected, (state, action) => {
      state.error = action.payload;
      // state.status="fail";
    });
    builder.addCase(blockUser.fulfilled, (state,action) => {
      state.adminUser = action.payload
    });
    builder.addCase(blockUser.rejected, (state,action) => {
      state.error = action.payload;
    });
    builder.addCase(unblockUser.fulfilled, (state,action) => {
      state.adminUser = action.payload
    });
    builder.addCase(unblockUser.rejected , (state,action) => {
      state.error = action.payload
    })
    

    builder.addCase(seePosts.fulfilled,(state,action) => { 
      state.adminPost = action.payload
    })
    builder.addCase(seePosts.rejected,(state,action) => { 
      state.error = action.payload
    })

    builder.addCase(deletePost.fulfilled,(state,action) => { 
      state.adminDeletePost = action.payload
    })
    builder.addCase(deletePost.rejected,(state,action) => { 
      state.error = action.payload
    })

  },
});

export default ProjectSlice.reducer;
