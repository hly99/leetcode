#include<bits/stdc++.h>
using namespace std;
int main()
{
	int j,s,sum=0,i,k,pd;
	char ads[10001];
	char zxc[10001];
	scanf("%s",&ads);
	scanf("%s",&zxc);
	j=strlen(zxc);
	s=strlen(ads);
	for(i=0;ads[i];i++){
		if(ads[i]>='A'&&ads[i]<='Z');
		else{
			ads[i]=ads[i]-32;
		}
	}
	for(i=0;zxc[i];i++){
		if(zxc[i]>='A'&&zxc[i]<='Z');
		else{
			zxc[i]=zxc[i]-32;
		}
	}
	while(s>=j){
		for(i=0;i<j;i++){
			pd=0;
			for(k=0;k<s;k++){
				if(zxc[i]==ads[k]){
					for(int p=k;p<s;p++){
						ads[p]=ads[p+1];
					}
					s--;
					pd=1;
					break;
				}
			}
			if(pd==0){
				s=0;
				break;
			}
		}
		if(pd==1)
		sum++;
	}
	printf("%d",sum);
return 0;
}

