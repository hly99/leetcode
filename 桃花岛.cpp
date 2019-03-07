#include<bits/stdc++.h>
using namespace std;

bool used[100][100];
char maze[100][100];
int dx[4]={0,1,0,-1};
int dy[4]={1,0,-1,0};
int maxstep;
int n,m;

bool isin(int x,int y){
	if(x<0||x>=n||y<0||y>=m)
	return true;
	if(used[x][y])
	return true;
	if(maze[x][y]=='#')
	return true;
	if(maze[x][y]=='\n')
	return true;
	return false;
}

void dfs(int x,int y){
	for(int i=0;i<4;i++){
		int nx=x+dx[i];
		int ny=y+dy[i];
		if(isin(nx,ny))
		continue;
		maxstep++;
		used[nx][ny]=true;
		dfs(nx,ny);
	}
}

int main(){
	int x,y;
	scanf("%d%d\n",&m,&n);
	for(int i=0;i<n;i++){
		for(int k=0;k<m+1;k++){
			scanf("%c",&maze[i][k]);
			if(maze[i][k]=='@'){
				x=i;
				y=k;
			}
		}
	}
	used[x][y]=true;
	maxstep=1;
	dfs(x,y);
	printf("%d",maxstep);
	return 0;
}
