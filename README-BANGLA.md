# Sumon Rari — Cinematic Portfolio

এটি একটি responsive, cinematic dark portfolio template, তৈরি HTML, CSS ও Vanilla JavaScript দিয়ে। YouTube embed প্রয়োজন নেই। নিজের MP4 ভিডিও `assets/videos/` ফোল্ডারে রাখুন।

## ১) নিজের তথ্য পরিবর্তন করুন
`index.html` ফাইল খুলে:
- `Sumon Rari` নিজের নাম অনুযায়ী ঠিক করুন।
- `hello@example.com`-এর জায়গায় নিজের ইমেইল দিন।
- Behance, LinkedIn ও Facebook-এর লিংক নিজের প্রোফাইলের লিংক দিয়ে বদলান।
- About section-এর পরিচিতি ও skills নিজের বাস্তব দক্ষতার সঙ্গে মিলিয়ে নিন।

## ২) নিজের ভিডিও যোগ করুন
এই ফোল্ডারে MP4 ফাইল রাখুন:
- `assets/videos/showreel.mp4`
- `assets/videos/project-01.mp4`
- `assets/videos/project-02.mp4`
- `assets/videos/project-03.mp4`
- `assets/videos/project-04.mp4`

ফাইলের নাম আলাদা হলে `index.html`-এ সংশ্লিষ্ট `src` এবং `data-video` মান আপডেট করুন। ভিডিওগুলো H.264 MP4 হলে বেশিরভাগ ব্রাউজারে ভালো চলে। ছোট compressed video ব্যবহার করলে সাইট দ্রুত লোড হবে। ফাইল বড় হলে ভিডিও হোস্টিং/CDN ব্যবহার করুন, কারণ static hosting-এর ফাইল ও bandwidth সীমা থাকতে পারে।

## ৩) Thumbnail বদলানো
`assets/images/`-এর SVG placeholder-গুলো নিজের JPG/WEBP/PNG thumbnail দিয়ে বদলাতে পারেন। তখন `index.html`-এর সংশ্লিষ্ট `<img src="...">` পাথও আপডেট করুন।

## ৪) কম্পিউটারে দেখুন
`index.html` ফাইলে ডাবল-ক্লিক করলেই সাধারণত ব্রাউজারে খুলবে। আরও ভালো local preview-এর জন্য VS Code-এর Live Server extension ব্যবহার করতে পারেন।

## ৫) Vercel-এ লাইভ করার নিয়ম
1. GitHub-এ লগইন করে `sumon-cinematic-portfolio` নামে নতুন repository বানান।
2. এই ফোল্ডারের সব ফাইল ও `assets` ফোল্ডার repository-তে upload/commit করুন।
3. https://vercel.com/ খুলে GitHub দিয়ে sign in করুন।
4. **Add New → Project** বেছে repository-টি Import করুন।
5. এটি plain static HTML project, তাই কোনো Framework Preset না থাকলে **Other** নির্বাচন করুন; Build Command ও Output Directory সাধারণত ফাঁকা রাখা যায়। যদি deployment settings-এ সমস্যা হয়, Build Command ফাঁকা এবং Output Directory `.` দিন।
6. **Deploy** চাপুন। সফল হলে `your-project-name.vercel.app`-এর মতো একটি লিংক পাবেন।

## গুরুত্বপূর্ণ
- YouTube ব্যবহার করা হয়নি; ভিডিও HTML5 `<video>` player দিয়ে চলে।
- নিজের ভিডিও ব্যবহারের অধিকার আপনার থাকতে হবে।
- Contact form নেই; email link ব্যবহার করা হয়েছে, তাই মেইল অ্যাপ খোলে।
- এই টেমপ্লেটে কোনো analytics বা backend নেই।
