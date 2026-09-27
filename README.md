# Knoz Certificate Verification Portal (بوابة التحقق من الشهادات)

هذا هو المشروع المستقل المخصص لبوابة التحقق من الشهادات لأكاديمية كنوز.
مصمم ليعمل بشكل مستقل وخفيف على Vercel عبر الرابط:
`https://knoz-verification.vercel.app/:sspId`

---

## طريقة رفع المشروع على GitHub في مستودع جديد

من خلال سطر الأوامر (Terminal) على جهازك:

```bash
# 1. الدخول لمجلد المشروع
cd knoz-verification

# 2. تهيئة مستودع Git جديد
git init

# 3. إضافة جميع الملفات
git add .

# 4. حفظ التغييرات
git commit -m "Initial commit for knoz-verification portal"

# 5. ربطه بالمستودع الجديد على GitHub (استبدلي YOUR_USERNAME باسم حسابك)
git remote add origin https://github.com/YOUR_USERNAME/knoz-verification.git

# 6. رفع الكود
git branch -M main
git push -u origin main
```

---

## طريقة النشر على Vercel

1. افتحي حسابك على [Vercel](https://vercel.com).
2. اضغطي على **Add New...** -> **Project**.
3. اختاري المستودع الجديد `knoz-verification` واضغطي **Import**.
4. في خانة **Project Name** اكتبي: `knoz-verification` (لكي تحصلي على دومين: `knoz-verification.vercel.app`).
5. في قسم **Environment Variables**، أضيفي المتغيرين:
   - `KNOZ_API_USERNAME`: اسم المستخدم الخاص بحساب API كنوز.
   - `KNOZ_API_PASSWORD`: كلمة المرور الخاصة بحساب API كنوز.
6. اضغطي **Deploy**.

---

## تجربة الرابط بعد النشر:
* رابط التحقق المباشر:  
  `https://knoz-verification.vercel.app/B1A0G6D3H7`
* عند التلاعب بالرابط تظهر صفحة **"رابط غير صالح / Not Valid Link"**.
