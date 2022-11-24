@echo off
SET a="C:\Users\Marin\Downloads\Navegation"
cd %a%android\app\src\main
mkdir assets\fonts
SET src_folder=%a%node_modules\react-native-vector-icons\Fonts
SET tar_folder=%a%android\app\src\main\assets\fonts

for /f %%a IN ('dir "%src_folder%" /b') do copy "%src_folder%\%%a" "%tar_folder%\"

pause