# 🚀 Vercel Deployment Checklist for Cognify Frontend

## ✅ Pre-Deployment Preparation (COMPLETED)

- [x] Updated `frontend/src/api/axios.js` to use environment variable
- [x] Created `frontend/.env.example` for documentation
- [x] Created `frontend/vercel.json` for SPA routing
- [x] Added GitHub and License badges to README
- [x] Committed and pushed changes to GitHub

---

## 📝 Deploy to Vercel - Step by Step

### Step 1: Go to Vercel
1. Visit [vercel.com](https://vercel.com/)
2. Sign in with your GitHub account

### Step 2: Import Project
1. Click **"Add New..."** → **"Project"**
2. Find and select **"Cognify"** from your repositories
3. Click **"Import"**

### Step 3: Configure Project Settings

**Framework Preset:** Vite (should auto-detect)

**Root Directory:** `frontend`
- Click **"Edit"** next to Root Directory
- Select `frontend` folder
- Click **"Continue"**

**Build Settings:**
- Build Command: `npm run build` (auto-detected)
- Output Directory: `dist` (auto-detected)
- Install Command: `npm install` (auto-detected)

### Step 4: Add Environment Variable

Click **"Environment Variables"** section:

**Variable Name:** `VITE_API_URL`  
**Value:** `https://your-backend-url.onrender.com`

⚠️ **IMPORTANT:** 
- You'll get this URL AFTER deploying your backend on Render
- For now, you can deploy without it (will use localhost)
- Add it later and redeploy

Click **"Add"**

### Step 5: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `https://cognify-xyz.vercel.app`

---

## 🔄 After Backend Deployment

Once you deploy your backend on Render:

### Step 1: Get Backend URL
From Render dashboard, copy your backend URL:
```
https://cognify-backend-abc123.onrender.com
```

### Step 2: Update Vercel Environment Variable

1. Go to your Vercel project
2. Click **"Settings"** → **"Environment Variables"**
3. Find `VITE_API_URL`
4. Click **"Edit"**
5. Update value to your Render backend URL
6. Click **"Save"**

### Step 3: Redeploy Frontend

1. Go to **"Deployments"** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. Wait for completion

---

## 🔧 Update Backend CORS

After getting your Vercel URL, update `backend/app.js`:

```javascript
app.use(cors({
  origin: [
    "http://localhost:5173",  // Keep for local dev
    "https://cognify-xyz.vercel.app",  // Your actual Vercel URL
    "https://*.vercel.app"  // Allow preview deployments
  ],
  credentials: true
}));
```

Then push to GitHub - Render will auto-redeploy.

---

## ✅ Verification Checklist

After deployment:

- [ ] Frontend loads at Vercel URL
- [ ] No console errors in browser DevTools
- [ ] Can navigate between pages
- [ ] Login/Signup forms render correctly
- [ ] After backend is deployed:
  - [ ] API calls go to Render backend (check Network tab)
  - [ ] No CORS errors
  - [ ] Can sign up / log in
  - [ ] Can generate content (MCQ, flashcards, etc.)

---

## 🎯 Quick Commands Reference

### Local Development
```bash
cd frontend
npm run dev
# Runs on http://localhost:5173
```

### Build Locally (Test)
```bash
cd frontend
npm run build
npm run preview
# Preview production build
```

### Update and Redeploy
```bash
# Make changes
git add .
git commit -m "Your message"
git push
# Vercel auto-deploys on push!
```

---

## 🐛 Common Issues

### Issue: "Failed to fetch" errors
**Solution:** Backend not deployed yet or `VITE_API_URL` not set

### Issue: CORS errors
**Solution:** Update `backend/app.js` with your Vercel URL

### Issue: 404 on page refresh
**Solution:** `vercel.json` handles this - already configured!

### Issue: Environment variable not working
**Solution:** 
1. Ensure it starts with `VITE_`
2. Redeploy after adding/changing env vars
3. Clear browser cache

---

## 📊 Deployment URLs

**Frontend (Vercel):** `https://cognify-xyz.vercel.app` (you'll get this)  
**Backend (Render):** `https://cognify-backend-abc.onrender.com` (deploy next)  
**GitHub Repo:** https://github.com/Ankush-verma-Source/Cognify

---

## 🎉 You're Ready!

Your frontend is now prepared for Vercel deployment. Follow the steps above to deploy!

**Next:** Deploy your backend on Render, then connect them together.

---

**Need help?** Check `DEPLOYMENT_GUIDE.md` for detailed instructions.
